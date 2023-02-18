export interface P2PMessage {
    "P2P:broadcast": TransferDataPackage;
    "P2P:new-node": string;
}

export interface TransferDataPackage {
    dataPackage: Array<TransferData>;
}

export interface TransferData {
    name: string;
    source: string;
    value: string;
    timestampMs: number;
    signature: string;
}
