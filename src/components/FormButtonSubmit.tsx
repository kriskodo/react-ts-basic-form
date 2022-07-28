import Button from 'react-bootstrap/Button';

export function FormButtonSubmit(props: { value: string, canSubmit: boolean }) {
    return (
        <Button variant="success" as="input" type="submit" value={props.value} disabled={!props.canSubmit} />
    )
}