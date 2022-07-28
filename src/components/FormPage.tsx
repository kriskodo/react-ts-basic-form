import { useCallback, useEffect, useState } from "react";
import { FormProps } from "../types/FormTypes";
import { FormButtonSubmit } from "./FormButtonSubmit";
import { FormButtonNavigate } from "./FormButtonNavigate";
import { FormInput } from "./FormInput";


export const FormPage: React.FC<FormProps> = ({ data, title, handleInput, page, currentPage, setCurrentPage }) => {
    const [canMoveForward, setCanMoveForward] = useState(false);

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
        if (isBackwards && setCurrentPage && page) {
            setCurrentPage(page - 1);
            return;
        }
        if (canMoveForward && setCurrentPage && page) {
            setCurrentPage(page + 1);
        }
    }

    return (
        <div>
            {page === currentPage && (
                <>
                    <h2 style={{ textAlign: "center" }}>{title}</h2>

                    {data.map((f, idx) => (
                        <FormInput
                            key={idx}
                            state={f}
                            handleInput={(e: any, label: string) => handleInput(e, label)}
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

