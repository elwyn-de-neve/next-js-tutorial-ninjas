import axios from "axios";

const URI = "https://jsonplaceholder.typicode.com"
const endpoint = "/users/"

export async function getStaticPaths() {
    const response = await axios.get( URI + endpoint )
    const paths = response.data.map( ninja => {
        return {
            params: { id: ninja.id.toString() }
        }
    })
    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const response = await axios.get( URI + endpoint + id )
    return {
        props: { ninja:  response.data }
    }
}

export default function Details( { ninja } ) {
    return (
        <div>
            <h1>{ ninja.name }</h1>
            <p>{ ninja.email }</p>
            <p>{ ninja.website }</p>
            <p>{ ninja.address.city }</p>

        </div>
    );
}
