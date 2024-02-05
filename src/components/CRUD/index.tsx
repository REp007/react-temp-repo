import { useState } from 'react';

// Todo 
/* form Clases */
import Form from './Form';
import ListProduit from './ListProduit';
import FormEdit from './FormEdit';


interface listProduitObj {
    id?: number
    nom: string,
    prix: number,
    marque: string,
    Qu: number
}

const listProduit: listProduitObj[] = [
    { id: 1, nom: 'produit1', prix: 25, marque: 'marque1', Qu: 20 },
    { id: 2, nom: 'produit2', prix: 35, marque: 'marque2', Qu: 20 }
];


function Index() {

    const [produits, setProduits] = useState<listProduitObj[]>(listProduit);

    const [isediting, setEditing] = useState<boolean>(false);

    const [editingData, setDataEditing] = useState<listProduitObj | null>(null);

    const handleClick = (data: listProduitObj) => {
        setProduits(
            [...produits,
            { id: produits.length++, ...data, }
            ]
        );
    }




    const handleDelete = (id: number) => {
        setProduits(produits.filter((elem: listProduitObj) => {
            return elem.id !== id;
        }))
    }



    // Todo Edit products ..........
    // when isediting
    const handleEdit = (id: number) => {
        setEditing(true);
        const listEditelement = produits.filter((elem: listProduitObj) => {
            return elem.id === id;
        })
        setDataEditing({ ...listEditelement[0] });
        // console.log(editingData);
    }

    const handleClickEdit = (data: listProduitObj) => {
        setProduits(produits.map((produit: listProduitObj) => (produit.id === data.id ? data : produit)))
        setEditing(false);
    }

    return (
        <>
            {!isediting ? (
                <Form handleClick={handleClick} />
            ) : (
                <FormEdit dataEdit={editingData} handleClickEdit={handleClickEdit} />
            )}

            <ListProduit data={produits} handleDelete={handleDelete} handleEdit={handleEdit} />

        </>
    )
}

export default Index;