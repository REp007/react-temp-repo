

interface listProduitObj {
    id: number
    nom: string,
    prix: number,
    marque: string,
    Qu: number
}

interface Props {
    'data': listProduitObj[],
    'handleDelete': (id: number) => void,
    'handleEdit': (id: number) => void
}

const ListProduit = ({ data, handleDelete, handleEdit}: Props) => {
    return (
        <>
            <table border={"2px"}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>nom</th>
                        <th>Prix</th>
                        <th>Marque</th>
                        <th>Qu</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((elem: listProduitObj) =>
                    (<tr key={elem.id}>
                        <td>{elem.id}</td>
                        <td>{elem.nom}</td>
                        <td>{elem.prix}</td>
                        <td>{elem.marque}</td>
                        <td>{elem.Qu}</td>
                        <td>
                            <button
                                onClick={() => handleEdit(elem.id)}
                            >Edit
                            </button>
                            <button
                                onClick={() => handleDelete(elem.id)}
                            >Delete</button>
                        </td>
                    </tr>
                    )
                    )}
                </tbody>
            </table>
        </>
    )
}

export default ListProduit