import { useNavigate } from "react-router-dom";
import { Api } from "../../api/api";
import "./Create.css";

function Create() {
  const navigate = useNavigate();

  async function processarSubmit(event) {
    event.preventDefault();

    const name = event.target.nome.value;
    const imageUrl = event.target.imageUrl.value;

    const payload = {
      name,
      imageUrl,
      category: "639136e2f875bd00698cf3f6",
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
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" />
        </div>

        <div>
          <label htmlFor="imageUrl">URL da Imagem:</label>
          <input type="text" id="imageUrl" />
        </div>

        <div>
          <input type="submit" value="Adicionar" />
        </div>
      </form>
    </div>
  );
}

export default Create;
