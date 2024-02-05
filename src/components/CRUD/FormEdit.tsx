import { useState } from 'react'

interface listProduitObj {
    id?: number
    nom: string,
    prix: number,
    marque: string,
    Qu: number
}

interface Props {
    'dataEdit': listProduitObj,
    'handleClickEdit': (data: listProduitObj) => void
}

const FormEdit = ({ dataEdit, handleClickEdit }: Props) => {
    const [product, setProduct] = useState<listProduitObj>(dataEdit);

    return (
        <>
            <div className="container">
                <form action="#">
                    <label htmlFor="">
                        Nom :{' '}
                        <input
                            type="text"
                            value={product?.nom || ''}
                            onChange={(e) => setProduct({ ...product, nom: e.target.value })}
                        />
                    </label>
                    <br />
                    <label htmlFor="">
                        Prix :{' '}
                        <input
                            type="number"
                            value={product?.prix || 0}
                            onChange={(e) => setProduct({ ...product, prix: Number(e.target.value) })}
                        />
                    </label>
                    <br />
                    <label htmlFor="">
                        Marque :{' '}
                        <input
                            type="text"
                            value={product?.marque || ''}
                            onChange={(e) => setProduct({ ...product, marque: e.target.value })}
                        />
                    </label>
                    <br />
                    <label htmlFor="">
                        Quantite :{' '}
                        <input
                            type="number"
                            value={product?.Qu || 0}
                            onChange={(e) => setProduct({ ...product, Qu: Number(e.target.value) })}
                        />
                    </label>
                    <br />
                    <button
                        type="button"
                        onClick={() => {
                            handleClickEdit(product!);
                        }}
                    >
                        Save The Edit
                    </button>
                </form>
            </div>
        </>
    );
};

export default FormEdit;
