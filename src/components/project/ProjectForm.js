export default function ProjectForm() {
    return <>
        <form>
            <div>    
               <input type="text" placeholder="Insira o nome do projeto"></input>
            </div>
            <div>
                <input type="number" placeholder="Insira o orçamento total"></input>
            </div>
            <div>
                <select name="category_id" placeholder="seleciona a categoria">
                    <option disabled>Selecione a categoria</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Criar Projeto"/>
            </div>
        </form>
    </>
}