const initStatePost = {
    post: {
        id: 0,
        title: 'title',
        author: 'author',
        date: '10.10.2018',
        description: 'description'
    },
    posts: [
        {
            "id": 1,
            "title": "Coinbase is Exploring Cardano, Basic Attention Token, Stellar Lumens, Zcash, and 0x",
            "author": "Coinbase",
            "date": "01.01.2016",
            "description": "Unlike the ongoing process of adding Ethereum Classic, which is technically very similar to Ethereum, these assets will require additional exploratory work and we cannot guarantee they will be listed for trading. Furthermore, our listing process may result in some of these assets being listed solely for customers to buy and sell, without the ability to send or receive using a local wallet. We may also only enable certain ways to interact with these assets through our site, such as supporting only deposits and withdrawals from transparent Zcash addresses. Finally, some of these assets may be offered in other jurisdictions prior to being listed in the US."
        },
        {
            "id": 2,
            "title": "Would You Let Your Boss Put a Chip in Your Body?",
            "author": "Guy Clapperton",
            "date": "15.07.2018",
            "description": "Patrick McMullan is president of Three Square Market in Wisconsin. After following experiments at Swedish incubator Epicenter in Stockholm, which has been experimenting with chipping since 2015, his company decided to develop the technology further. Naturally, as a supplier and a developer, McMullan has a chip implant himself — one roughly the size of a grain of rice implanted under the skin between his thumb and index finger. It’s based on near-field communication (NFC) technology — the same chips that are used in contactless credit cards or mobile payments. Implants are done quickly and simply with a syringe and very little blood."
        }
    ]
}

export default function rootReducer(state = initStatePost, action){
    switch(action.type){
        case 'CREATE_POST':
            return {
                ...state,
                posts: [...state.posts, action.post]
            }
        case "DELETE_POST":
            return {
                ...state,
                posts: [...state.posts.filter(post => post.id !== action.id)]
            }
        default: {
            return {
                ...state
            }
        }
    }
}