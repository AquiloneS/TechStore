// helper functions
export default function featuredProducts (data){
    return data.filter((item)=>{return item.featured===true})
}

// flatten

export function flattenProducts (data){
    return data.map(item=>{
        let image = item.image.url;
        return {...item,image}
    })  
}