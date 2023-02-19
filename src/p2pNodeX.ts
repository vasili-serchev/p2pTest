import { MessageUnion, Network, Node } from "ataraxia";
import { createNetwork } from "./networkInit";
import { P2PMessage, TransferData, TransferDataPackage } from "./transfers";

/**
 * Peer-to-peer communication between nodes
 */
export default class P2PNode {
    private net: Network<P2PMessage> | undefined;
    private port;
    private nodeIPs;
    private nodeName;

    constructor(port: number, IPs: string[], name: string) {
        this.port = port;
        this.nodeIPs=IPs;    
        this.nodeName=name;
        this.createNet();
    }

    public static Hello() {
        console.log("hello");
    }

    private createNet() {
        this.net = createNetwork(this.port, this.nodeIPs);
        this.net.onMessage(this.onMessage);
        this.net.onNodeAvailable((node) => {
            console.log("A new node is available:", node.id);
            let msg = "I am new " + this.nodeName;
            node.send("P2P:new-node", msg).catch((err) => console.log("Unable to send new node message", err));
        });
    }

  
    // P2P message handler
    onMessage = async (message: MessageUnion<P2PMessage>) => {
        console.log('A message was received', message.type, 'with data', message.data, 'from', message.source.id);
    };

    async start() {
        // Join the network
        if (this.net == undefined) return;
        await this.net.join();
    }
}
