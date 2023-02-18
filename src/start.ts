import dotenv from "dotenv";
import P2PNodeX from "./p2pNodeX";
dotenv.config();
async function run() {
    console.log("hello world");  
    let IPs = ["54.85.17.29:11125", "54.145.113.77:11125", "3.87.160.24:11125"];
    let port = 11125;
    console.log(`starting p2p...`);
    P2PNodeX.Hello();
    let n = new P2PNodeX(port, IPs, "Hans");
    await n.start();
    console.log("I am here");
}
run();
