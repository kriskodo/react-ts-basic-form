import { useCallback, useContext, useEffect, useState } from "react";
import { FormPageProps, FormProps } from "../types/FormTypes";
import { FormButtonSubmit } from "./FormButtonSubmit";
import { FormButtonNavigate } from "./FormButtonNavigate";
import { FormInput } from "./FormInput";
import FormContext from "../context/formContext";


export const FormPage: React.FC<FormPageProps> = ({ data, title, page }) => {
    const [canMoveForward, setCanMoveForward] = useState(false);
    const context = useContext(FormContext);

    const handleMoveForward = useCallback(() => {
        const errors = [];

        data.forEach(f => f.validations?.forEach(v => {
            if (!v.isValid(f.value)) {
                errors.push(v.message);
            }
        }))

        setCanMoveForward(false);

        if (errors.length === 0) {
            setCanMoveForward(true);
        }
    }, [data])

    useEffect(() => {
        handleMoveForward();
    }, [data, handleMoveForward])

    const handleNavigate = (isBackwards?: boolean) => {
        if (isBackwards && page) {
            context?.setCurrentPage(page - 1);
            return;
        }
        if (canMoveForward && page) {
            context?.setCurrentPage(page + 1);
        }
    }

    return (
        <div>
            {page === context?.currentPage && (
                <>
                    <h2 style={{ textAlign: "center" }}>{title}</h2>

                    {data.map((f, idx) => (
                        <FormInput
                            key={idx}
                            state={f}
                            handleInput={(e: any, label: string) => context?.handleInput(e, label)}
                        />
                    ))}
                    <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                        {page === 1 && (
                            <FormButtonNavigate value={"Next"} canMove={canMoveForward} handleNavigate={() => handleNavigate()} />
                        )}

                        {page && page > 1 && page < 3 && (
                            <>
                                <FormButtonNavigate value={"Back"} canMove={true} handleNavigate={() => handleNavigate(true)} />
                                <FormButtonNavigate value={"Next"} canMove={canMoveForward} handleNavigate={() => handleNavigate()} />
                            </>
                        )}

                        {page && page === 3 && (
                            <>
                                <FormButtonNavigate value={"Back"} canMove={true} handleNavigate={() => handleNavigate(true)} />
                                <FormButtonSubmit value={"Submit"} canSubmit={canMoveForward} />
                            </>
                        )}
                    </div>
                </>
            )}
        </div>
    )
}

