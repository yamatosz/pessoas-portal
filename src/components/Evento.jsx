import Button from "./Button";

function Event() {
    function MyEvent() {
        console.log("Ativado!!")
    }

    return (
        <div>
            <p>Clique para disparar o evento:</p>
            <Button event={MyEvent} text="Ativar" />
        </div>
    )
}

export default Event;