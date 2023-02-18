import { Network, AnonymousAuth } from "ataraxia";
import { TCPTransport } from "ataraxia-tcp";

export function createNetwork(port: number, IPs: string[]): Network {
    console.log("port=", port);
    let auth = new AnonymousAuth();

    const transport = new TCPTransport({
        port: port, //config.port,
        authentication: [auth],
    });
    
    for (let ip of IPs) {
        const [host, port] = ip.split(":");
        transport.addManualPeer({
            host,
            port: parseInt(port),
        });
    }
    return new Network({
        name: "oracle-network",
        transports: [transport],
    });
}
