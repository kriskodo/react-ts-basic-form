import { Button } from "react-bootstrap"

export function FormButtonNavigate(props: { value: string, canMove: boolean, handleNavigate: () => void }) {
    return (
        <Button variant="primary" as="input" type="button" value={props.value} disabled={!props.canMove} onClick={props.handleNavigate} />
    )
}