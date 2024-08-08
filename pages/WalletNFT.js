import { useWalletNFTs } from "@quicknode/icy-nft-hooks";
import { useState } from "react";

function WalletNFTs() {
    const [ensName, setEnsName] = useState("Aditya Mishra"); //vitalik.eth
    const [cursor, setCursor] = useState("");
    const { nfts, isSearchValid, pageInfo } = useWalletNFTs({
        ensName,
        first: 12,
        after: cursor,
    });

    return (
        <div className="p-10 flex flex-col items-center">
            <div className="w-full h-full flex flex-col justify-start gap-5 items-center">
                <h1 className="text-7xl font-bold">NFT Gallery</h1>
            </div>
            <div className="flex-left flex-col mt-4">
                <label
                    className="text-white text-2xl font-extrabold pb-2"
                    htmlFor="wallet-address"
                >
                    &nbsp; Ethereum Name Service &nbsp;
                </label>
                <div className="search">
                    <input
                        className="px-3 py-2 rounded-md"
                        type="text"
                        value={ensName}
                        onChange={(e) => setEnsName(e.target.value)}
                        style={{
                            outlineColor:
                                !isSearchValid && ensName.length > 0 ? "red" : undefined,
                        }}
                    />
                </div>
            </div>

            <div className="grid grid-cols-4 mt-8 gap-4">
                {/* {console.log(nfts)}
                {nfts.map((nft) => {
                    const contract = nft.contract;
                    console.log(contract);
                    const imageUrl = nft.images.find((i) => !!i.url)?.url;

                    return (
                        <div
                            className="flex flex-col rounded border p-4"
                            key={`${nft.tokenId}${nft.contract.address}`}
                        >
                            <div className="w-full h-full rounded shadow flex justify-center items-center">
                                <img
                                    className="w-full h-full"
                                    src={imageUrl ?? "../public/web3.png"}
                                    alt="awesome nft"
                                />
                            </div>
                            <div>
                                <h1 className="font-bold">{contract.name}</h1>
                                <h2 className="truncate">
                                    {contract.symbol}#{nft.tokenId}
                                </h2>
                            </div>
                        </div>
                    );
                })} */}
                <div
                    className="flex flex-col rounded border p-4"
                >
                    <img src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722988800&semt=ais_hybrid" alt="web3.png" srcset="" />
                </div>
                <div
                    className="flex flex-col rounded border p-4"
                >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc0oWY_wAZ-OZ0N73gkVZ7Y9xkrnEvIVobi71oIIHYpGVD6BPpmozmNRtQbgX2DyiI1pA&usqp=CAU" alt="" />
                </div>
                <div
                    className="flex flex-col rounded border p-4"
                >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmrMR3enCxS0TPpxGqnWUfZExyt9gDPT1xdcVylhMV5K_dd_fi-my6YvWnER4ztQkK-JU&usqp=CAU" alt="" />
                </div>
                <div
                    className="flex flex-col rounded border p-4"
                >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSadOo9oS7hpKnEaUxwq1o8J4WJ3y9QtZ2Xzd_mVx7jRRnVpVH0mmvITQ4PHEFW9oVLU3s&usqp=CAU" alt="" />
                </div>
                <div
                    className="flex flex-col rounded border p-4"
                >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOQ_4hYDKFYt7247UiJyqU2pkUydo8maUDLOVwyUQBHV8YHHe3GGVCHj5Q1-mC7P7c6dw&usqp=CAU" alt="" />
                </div>
                <div
                    className="flex flex-col rounded border p-4"
                >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVBsWZPJMaMH6s_lvZ54oc5DWWS8mwybG7_Q&usqp=CAU" alt="" />
                </div>
                <div
                    className="flex flex-col rounded border p-4"
                >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzDm7zMn59BZD9m_IVGEZKwbyV8wzjipycVQ&usqp=CAU" alt="" />
                </div>
                <div
                    className="flex flex-col rounded border p-4"
                >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAjiJ0FJQP3T1TsAfhufE84W-ZROIt-nH2sw&usqp=CAU" alt="" />
                </div>
            </div>

            {pageInfo?.hasNextPage && (
                <div
                    style={{
                        alignItems: "flex-end",
                        width: "100%",
                        justifyContent: "flex-end",
                        display: "flex",
                    }}
                >
                    <button
                        onClick={() => {
                            setCursor(pageInfo.endCursor ?? undefined);
                        }}
                    >
                        Next
                    </button>
                </div>
            )}
            <div>
                Developed from ❤️ by <a href="https://autumn-haze-7462.on.fleek.co/" target="_blank" rel="noopener noreferrer">Aditya Mishra</a>
            </div>
        </div>
        
    );
}

export default WalletNFTs;
