"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stream = exports.StreamStatus = void 0;
var StreamStatus;
(function (StreamStatus) {
    StreamStatus["CREATED"] = "created";
    StreamStatus["LIVE"] = "live";
    StreamStatus["ENDED"] = "ended";
})(StreamStatus || (exports.StreamStatus = StreamStatus = {}));
class Stream {
    props;
    constructor(props) {
        this.props = props;
    }
    static create(props) {
        const now = new Date();
        return new Stream({
            ...props,
            id: crypto.randomUUID(),
            createdAt: now,
        });
    }
    static reconstitute(props) {
        return new Stream(props);
    }
    /** Transition to LIVE. No-op if already LIVE (idempotent). */
    start() {
        if (this.props.status === StreamStatus.LIVE)
            return;
        this.props.status = StreamStatus.LIVE;
    }
    /** Transition to ENDED. No-op if already ENDED (idempotent). */
    end() {
        if (this.props.status === StreamStatus.ENDED)
            return;
        this.props.status = StreamStatus.ENDED;
        this.props.endedAt = new Date();
    }
    /** Refresh heartbeat timestamp — guarantees lastHeartbeatAt is non-null while LIVE. */
    heartbeat() {
        this.props.lastHeartbeatAt = new Date();
    }
    /** Populate all Cloudflare Stream fields from a live input creation result. */
    attachCloudflareInput(result) {
        this.props.cloudflareInputUid = result.uid;
        this.props.cloudflareRtmpsUrl = result.rtmpsUrl;
        this.props.cloudflareRtmpsStreamKey = result.rtmpsStreamKey;
        this.props.cloudflarePlaybackHlsUrl = result.playbackHlsUrl;
        this.props.cloudflareWebRtcPublishUrl = result.webRtcPublishUrl;
        this.props.hlsUrl = result.playbackHlsUrl;
    }
    getStatus() {
        return this.props.status;
    }
    updateViewerCount(count) {
        this.props.viewerCount = count;
    }
    getId() {
        return this.props.id;
    }
    getStreamKey() {
        return this.props.streamKey;
    }
    getStreamerId() {
        return this.props.streamerId;
    }
    getSourceType() {
        return this.props.sourceType;
    }
    getCloudflareInputUid() {
        return this.props.cloudflareInputUid;
    }
    /** Backward-compatible helper. Returns true only when status is LIVE. */
    isLive() {
        return this.props.status === StreamStatus.LIVE;
    }
    toJSON() {
        return {
            ...this.props,
            isLive: this.props.status === StreamStatus.LIVE,
        };
    }
}
exports.Stream = Stream;
