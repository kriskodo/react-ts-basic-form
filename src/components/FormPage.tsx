import React, { useCallback, useContext, useEffect, useState } from "react";
import { FormPageProps } from "../types/FormTypes";
import { FormButtonSubmit } from "./FormButtonSubmit";
import { FormButtonNavigate } from "./FormButtonNavigate";
import { FormInput } from "./FormInput";
import FormContext from "../context/formContext";


export const FormPage: React.FC<FormPageProps> = ({ inputsRange, title, page }) => {
    const [canMoveForward, setCanMoveForward] = useState(false);
    const context = useContext(FormContext);
    const data = context?.fields.slice(inputsRange[0], inputsRange[1]);

    const handleMoveForward = useCallback(() => {
        const errors = [];

        data?.forEach(field => field.validations?.forEach(v => {
            if (!v.isValid(field.checked !== undefined ? field.checked : field.value)) {
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

                    {data?.map((field, idx) => (
                        <FormInput
                            key={idx}
                            state={field}
                            handleInput={(e: any, label: string) => context?.handleInput(e, label)}
                        />
                    ))}

                    <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                        {context?.pages === 1 && (
                            <FormButtonSubmit value={"Submit"} canSubmit={canMoveForward} />
                        )}

                        {page === 1 && context?.pages > 1 && (
                            <FormButtonNavigate value={"Next"} canMove={canMoveForward} handleNavigate={() => handleNavigate()} />
                        )}

                        {page > 1 && page < context?.pages && (
                            <>
                                <FormButtonNavigate value={"Back"} canMove={true} handleNavigate={() => handleNavigate(true)} />
                                <FormButtonNavigate value={"Next"} canMove={canMoveForward} handleNavigate={() => handleNavigate()} />
                            </>
                        )}

                        {page > 1 && page === context.pages && (
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

