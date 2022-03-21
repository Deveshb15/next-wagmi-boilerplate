import React, {useRef} from 'react'

import { ethers } from 'ethers';

const Contract = () => {

    const CONTRACT_ADDRESS = useRef("");
	const ABI = useRef("");

	const checkContract = async (e) => {
		try {
			e.preventDefault();

			let contract_address = CONTRACT_ADDRESS.current.value;
			let abi = ABI.current.value;
			abi = JSON.parse(abi);
			const provider = new ethers.providers.Web3Provider(ethereum)
            const signer = provider.getSigner()
			const contract = new ethers.Contract(contract_address, abi, signer);
			console.log(contract);
			console.log(contract.address);
            console.log("Going to add these methods to frontend with clickable buttons soon, if you would like to work on this do contribute on GitHub!")
		} catch (err) {
			console.log(err);
		}
	};

	const renderContainer = () => (
		<div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className='text-4xl font-bold my-4'>Interact with contract!</h1>
			<form onSubmit={(e) => checkContract(e)}>
				<div>
					<label htmlFor="address">CONTRACT_ADDRESS: </label>
					<input className='border rounded-xl px-2 py-1' ref={CONTRACT_ADDRESS} type="text" id="address" />
				</div>
				<div
					style={{ margin: "12px 0px", display: "flex", alignItems: "center" }}
				>
					<label htmlFor="abi">ABI:</label>
					<textarea className='border rounded-xl px-2 py-1' ref={ABI} id="abi" />
				</div>
				<button className="my-2 px-2 py-1 border rounded-xl bg-black text-white hover:bg-white hover:text-black" type="submit">
					Get contract
				</button>
			</form>
		</div>
	);

    return (
        <div>
            {renderContainer()}
        </div>
    )
}

export default Contract