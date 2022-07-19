import productPreview from "../imgs/Rectangle 31.png"

export const productsStore = ({
    state:()=> {
        return{
            products:[
                {
                    id:1,
                    img: productPreview,
                    name:"Наименование товара",
                    description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
                    price: "10 000 руб."
                },{
                    id:2,
                    img: productPreview,
                    name:"Наименование товара",
                    description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
                    price: "10 000 руб."
                },{
                    id:3,
                    img: productPreview,
                    name:"Наименование товара",
                    description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
                    price: "10 000 руб."
                },{
                    id:4,
                    img: productPreview,
                    name:"Наименование товара",
                    description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
                    price: "10 000 руб."
                },{
                    id:5,
                    img: productPreview,
                    name:"Наименование товара",
                    description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
                    price: "10 000 руб."
                },{
                    id:6,
                    img: productPreview,
                    name:"Наименование товара",
                    description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
                    price: "10 000 руб."
                },
            ]
        }
    },
    getters: {
        sortedPosts(state){
            return [...state.products]/*.sort((post1,post2)=> post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))*/
        },
    },
    mutations: {
        setProducts(state, products){
            state.products = products;
        }
    },
    actions: {
        createProduct({state, commit}, product) {
            commit('setProducts', [...this.state, ...product])
        }
    },
    namespaced: true
})