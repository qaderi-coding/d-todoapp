var btn = document.getElementById('submit')
var list = document.getElementById('list')


window.ethereum.enable();
var provider = new ethers.providers.Web3Provider(
    web3.currentProvider,
    "ropsten"
);

var MoodContractAddress = "0x47A48C0a923093633111935D568b9D189dd6346c";
var MoodContractABI = [
    {
        "inputs": [],
        "name": "getTask",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_task",
                "type": "string"
            }
        ],
        "name": "setTask",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]
var MoodContract
var signer

provider.listAccounts().then(function (accounts) {
    signer = provider.getSigner(accounts[0]);
    MoodContract = new ethers.Contract(
        MoodContractAddress,
        MoodContractABI,
        signer
    );
});

async function getTask(event) {
    event.preventDefault()
    getTaskPromise = MoodContract.getTask();
    var task = await getTaskPromise;
    console.log(task)
    list.insertAdjacentHTML('beforeend', `
        <li class="list-group-item">${task}</li>
        `)
}

async function setTask(event) {
    event.preventDefault()

    task = document.getElementById('task').value
    setTaskPromise = MoodContract.setTask(task);
    await setTaskPromise;
}


