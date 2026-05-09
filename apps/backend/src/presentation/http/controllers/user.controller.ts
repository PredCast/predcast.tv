import { Request, Response, NextFunction } from 'express';
import { injectable } from 'tsyringe';
import { supabaseClient as supabase } from '../../../infrastructure/database/supabase/client';
import { logger } from '../../../infrastructure/logging/logger';

const BUCKET = 'avatars';
const ALLOWED_MIME = new Set(['image/jpeg', 'image/png', 'image/webp']);
const EXT_BY_MIME: Record<string, string> = {
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/webp': 'webp',
};

interface AuthedRequest extends Request {
    file?: Express.Multer.File;
}

@injectable()
export class UserController {
    /** POST /users/avatar — multipart `file` field. Returns the public URL. */
    async uploadAvatar(req: AuthedRequest, res: Response, next: NextFunction): Promise<void> {
        try {
            const wallet = req.user?.walletAddress;
            if (!wallet) {
                res.status(401).json({ success: false, error: 'Wallet not derivable from token' });
                return;
            }
            const file = req.file;
            if (!file) {
                res.status(400).json({ success: false, error: 'No file uploaded (expected multipart field "file")' });
                return;
            }
            if (!ALLOWED_MIME.has(file.mimetype)) {
                res.status(400).json({ success: false, error: 'Only JPEG / PNG / WEBP accepted' });
                return;
            }

            const ext = EXT_BY_MIME[file.mimetype];
            // Wallet-scoped path so a user can only ever overwrite their own avatar (the JWT
            // pins the wallet — clients can't ask to upload onto someone else's slot).
            const path = `${wallet.toLowerCase()}.${ext}`;

            const { error: uploadError } = await supabase.storage
                .from(BUCKET)
                .upload(path, file.buffer, { contentType: file.mimetype, upsert: true });

            if (uploadError) {
                logger.warn('Avatar upload failed', { wallet, error: uploadError.message });
                res.status(500).json({ success: false, error: 'Upload failed' });
                return;
            }

            const { data: urlData } = supabase.storage.from(BUCKET).getPublicUrl(path);
            // Append a cache-buster so Dynamic / browsers refresh on re-upload.
            const url = `${urlData.publicUrl}?v=${Date.now()}`;

            res.json({ success: true, url, timestamp: Date.now() });
        } catch (error) {
            next(error);
        }
    }

    /** DELETE /users/avatar — removes whichever extension exists. */
    async deleteAvatar(req: AuthedRequest, res: Response, next: NextFunction): Promise<void> {
        try {
            const wallet = req.user?.walletAddress;
            if (!wallet) {
                res.status(401).json({ success: false, error: 'Wallet not derivable from token' });
                return;
            }
            const paths = Object.values(EXT_BY_MIME).map((ext) => `${wallet.toLowerCase()}.${ext}`);
            const { error } = await supabase.storage.from(BUCKET).remove(paths);
            if (error) {
                logger.warn('Avatar delete failed', { wallet, error: error.message });
                res.status(500).json({ success: false, error: 'Delete failed' });
                return;
            }
            res.json({ success: true, timestamp: Date.now() });
        } catch (error) {
            next(error);
        }
    }
}
