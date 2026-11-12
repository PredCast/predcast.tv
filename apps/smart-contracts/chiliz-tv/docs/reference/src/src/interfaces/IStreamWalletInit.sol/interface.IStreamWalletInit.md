# IStreamWalletInit

Interface for StreamWallet initialization

*Used by StreamWalletFactory to initialize new StreamWallet proxies*


## Functions
### initialize

Initialize the StreamWallet


```solidity
function initialize(address streamer_, address treasury_, uint16 platformFeeBps_, address kayenRouter_, address usdc_)
    external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamer_`|`address`|The streamer address (owner/beneficiary)|
|`treasury_`|`address`|The platform treasury address|
|`platformFeeBps_`|`uint16`|Platform fee in basis points|
|`kayenRouter_`|`address`||
|`usdc_`|`address`||


