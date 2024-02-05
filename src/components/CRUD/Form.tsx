import React, { useState } from 'react';

interface listProduitObj {
    id?: number;
    nom: string;
    prix: number;
    marque: string;
    Qu: number;
}

interface Props {
    handleClick: (data: listProduitObj) => void;
}

const Form = ({ handleClick }: Props) => {
    const [product, setProduct] = useState<listProduitObj>({
        nom: '',
        prix: 0,
        marque: '',
        Qu: 0,
    });

    const [errors, setErrors] = useState<string[]>([]);

    const checkErrors = (productValue: listProduitObj) => {
        const newErrors: string[] = [];

        if (productValue.nom === '') {
            newErrors.push('Nom is required');
        }

        if (productValue.prix <= 0) {
            newErrors.push('Prix must be bigger than 0');
        }

        if (productValue.marque === '') {
            newErrors.push('Marque is required');
        }

        if (productValue.Qu <= 0) {
            newErrors.push('Quantite must be bigger than 0');
        }

        setErrors(newErrors);
    };

    const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="container">
                <form action="#">
                    <label htmlFor="">
                        Nom :{' '}
                        <input
                            type="text"
                            value={product.nom}
                            name="nom"
                            onChange={handlechange}
                        />
                    </label>
                    <br />
                    <label htmlFor="">
                        Prix :{' '}
                        <input
                            type="number"
                            name="prix"
                            value={product.prix}
                            onChange={handlechange}
                        />
                    </label>
                    <br />
                    <label htmlFor="">
                        Marque :{' '}
                        <input
                            type="text"
                            name="marque"
                            value={product.marque}
                            onChange={handlechange}
                        />
                    </label>
                    <br />
                    <label htmlFor="">
                        Quantite :{' '}
                        <input
                            type="number"
                            name="Qu"
                            value={product.Qu}
                            onChange={handlechange}
                        />
                    </label>
                    <br />
                    <button
                        type="button"
                        onClick={() => {
                            checkErrors(product);

                            // Check if there are any errors
                            if (errors.length === 0) {
                                handleClick(product);
                                setProduct({
                                    nom: '',
                                    prix: 0,
                                    marque: '',
                                    Qu: 0,
                                });
                            }
                        }}
                    >
                        Add
                    </button>

                    {errors.length > 0 && (
                        <ul>
                            {errors.map((msg: string, index: number) => (
                                <li key={index}>{msg}</li>
                            ))}
                        </ul>
                    )}
                </form>
            </div>
        </>
    );
};

export default Form;
