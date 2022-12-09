import { useNavigate } from "react-router-dom";
import { Api } from "../../api/api";
import "./Create.css";
import Select from "react-select";
import { useState } from "react";
import { useEffect } from "react";
import { faUnderline } from "@fortawesome/free-solid-svg-icons";

function Create() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState();

  console.log(categories);

  async function loadCategories() {
    console.log("Carregar categorias");
    const readAll = Api.category.readAll();

    const response = await Api.buildApiGetRequest(readAll);

    const resultado = await response.json();
    setCategories(resultado);
  }
  useEffect(function () {
    loadCategories();
  }, []);

  async function processarSubmit(event) {
    event.preventDefault();

    const name = event.target.nome.value;
    const imageUrl = event.target.imageUrl.value;
    const category = event.target.category.value;

    const payload = {
      name,
      imageUrl,
      category,
    };

    const createUrl = Api.item.create();
    const response = await Api.buildApiPostRequest(createUrl, payload);
    const body = await response.json();

    if (response.status === 201) {
      alert("Item criado com sucesso");
      navigate("/");
    } else {
      alert("Algum erro ocorreu, tente novamente.");
    }
  }

  return (
    <div className="Create">
      <form onSubmit={processarSubmit}>
        <div>
          <label htmlFor="nome">Nome*:</label>
          <input type="text" id="nome" />
        </div>

        <div>
          <label htmlFor="imageUrl">URL da Imagem:</label>
          <input type="text" id="imageUrl" />
        </div>

        <div>
          <label htmlFor="category">Categoria*:</label>
          <Select
            options={categories?.map(function (category) {
              return { value: category._id, label: category.name };
            })}
            name="category"
          />
        </div>

        <div>
          <input type="submit" value="Adicionar" />
        </div>
      </form>
    </div>
  );
}

export default Create;
