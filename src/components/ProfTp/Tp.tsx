import React, { Component } from "react"
class TPCrudProduit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            //objet permet de récupérer les données from les inputs
            produit: {
                id: 0,
                nom: '',
                prix: 0,
                quantite: 0,
                marque: ''
            },

            //sauvegarder les produits afin de les afficher
            listeProduit: [],
            errorChamps: false,
            buttonAjouter: true
        }

    }


    //récupérer les valeurs des inputs puis les sauvegarder dans l'objet produit du state
    getValue = (event) => {
        this.setState({
            produit: {
                ...this.state.produit,
                [event.target.name]: event.target.value
            }
        })


    }



    //ajouter un produit dans le tableau listeProduits

    ajouterProduit = () => {
        //récupérer l'objet produit from state
        const { produit } = this.state;
        //vérifier si tous les champs de l'objet produit du state sont remplis
        if (produit.nom != '' && produit.marque != '' && produit.prix > 0 && produit.quantite > 0) {
            //insérer le produit dans le tableau
            this.setState({


                listeProduit: [...this.state.listeProduit, produit],
                //initialiser les attributs de l'objet produit afin d'ajouter un nouveau produit
                produit: {
                    id: this.state.produit.id + 1,
                    nom: '',
                    prix: 0,
                    quantite: 0,
                    marque: ''
                },
                errorChamps: false

            })
        }
        //Erreur, tous les champs sont obligatoires
        else {
            this.setState({
                errorChamps: true
            })

        }

    }


    //supprimer un produit avec son id passé en paramètre
    supprimerProduit = (idprod) => {
        this.setState({
            listeProduit: this.state.listeProduit.filter((p) => p.id != idprod)
        })
    }


    modifierProduit = (prod) => {
        this.setState({
            produit: prod,
            buttonAjouter: false
        })

    }

    validerModifier = () => {

        this.setState({
            //boucler sur les produits de la liste
            listeProduit: this.state.listeProduit.map((pro) => {
                //si le prduit pro de la liste son id=id du produit à modifier
                if (pro.id == this.state.produit.id) {
                    //on remplace pro avec le produit modifié (this.state.produit)
                    return this.state.produit
                }
                //sinon on garde le produit pro
                else {
                    return pro
                }
            }),
            //reafficher le bouton ajouter
            buttonAjouter: true,
            //initialiser les champs
            produit: {
                id: this.state.listeProduit[this.state.listeProduit.length - 1].id + 1,
                nom: '',
                prix: 0,
                quantite: 0,
                marque: ''
            },

        })

    }



    vendre = (idpro) => {
        this.setState({
            listeProduit: this.state.listeProduit.map((pro) => {

                if (pro.id == idpro) {
                    if (pro.quantite > 0) {
                        pro.quantite -= 1;
                    }
                }
                return pro;
            })
        })
    }
    render() {
        return (<div>

            <table>
                <tr>
                    <td>Nom</td>
                    <td><input type="text" name="nom" value={this.state.produit.nom} onChange={this.getValue} /></td>
                </tr>
                <tr>
                    <td>Prix</td>
                    <td><input type="number" name="prix" value={this.state.produit.prix} onChange={this.getValue} /></td>
                </tr>
                <tr>
                    <td>Marque</td>
                    <td><input type="text" name="marque" value={this.state.produit.marque} onChange={this.getValue} /></td>
                </tr>
                <tr>
                    <td>Quantite</td>
                    <td><input type="number" name="quantite" value={this.state.produit.quantite} onChange={this.getValue} /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        {this.state.buttonAjouter == true ? <input type="button" value="Ajouter" onClick={this.ajouterProduit} /> :
                            <input type="button" value="Modifier" onClick={this.validerModifier} />
                        }

                    </td>
                </tr>
            </table>

            {
                this.state.errorChamps == true ? <span style={{ backgroundColor: "red" }}>Erreur, tous les champs sont obligatoires</span> : ''
            }
            <h5>Listes produits</h5>
            <table border={1}>
                <thead>
                    <th>Id</th>
                    <th>Nom</th>
                    <th>Prix</th>
                    <th>Marque</th>
                    <th>Quantite</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {this.state.listeProduit.map((pro) => {
                        return (<tr style={{ backgroundColor: pro.quantite <= 0 ? 'red' : '' }}>
                            <td>{pro.id}</td>
                            <td>{pro.nom}</td>
                            <td>{pro.prix}</td>
                            <td>{pro.marque}</td>
                            <td>{pro.quantite}</td>
                            <td>
                                <input type="button" onClick={() => this.supprimerProduit(pro.id)} style={{ width: '33%' }} value="supprimer" />
                                <input type="button" onClick={() => this.modifierProduit(pro)} style={{ width: '33%' }} value="modifier" />
                                <input type="button" onClick={() => this.vendre(pro.id)} style={{ width: '33%' }} value="vente" />

                            </td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>)
    }
}
export default TPCrudProduit