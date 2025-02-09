/*=============================================== EditPassword ===============================================*/

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Text, Form, Input, passwordRegex } from "@julseb-lib/react"
import { useAuthContext } from "context"
import { userService } from "api"
import { Page, ErrorMessage } from "components"
import { PATHS } from "routes"
import { COMMON_TEXTS } from "shared"
import type { IErrorMessage as ErrorMessageType } from "types"
import type { LibValidationStatus } from "@julseb-lib/react/types"

export const EditPassword = () => {
    const { user, setUser, setToken } = useAuthContext()
    const navigate = useNavigate()

    const [passwords, setPasswords] = useState({
        oldPassword: "",
        newPassword: "",
    })
    const [validation, setValidation] = useState<
        | undefined
        | {
              oldPassword?: LibValidationStatus
              newPassword?: LibValidationStatus
          }
    >(undefined)
    const [errorMessage, setErrorMessage] =
        useState<ErrorMessageType>(undefined)

    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target

        setPasswords({ ...passwords, [id]: value })

        setValidation({
            ...validation,
            [id]:
                value.length > 0
                    ? passwordRegex.test(value)
                        ? true
                        : false
                    : undefined,
        })
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        if (!passwords.oldPassword || !passwords.newPassword) {
            setValidation({
                oldPassword: !passwords.oldPassword ? false : undefined,
                newPassword: !passwords.newPassword ? false : undefined,
            })
            return
        }

        userService
            .editPassword(user?._id!, passwords)
            .then(res => {
                setUser(res.data.user)
                setToken(res.data.authToken)
                navigate(-1)
            })
            .catch(err => setErrorMessage(err))
    }

    return (
        <Page title="Edit password" mainSize="form">
            <Text tag="h1">Edit your password</Text>

            <Form
                onSubmit={handleSubmit}
                buttonPrimary="Save"
                buttonSecondary={{ text: "Cancel", to: PATHS.MY_ACCOUNT }}
            >
                <Input
                    id="oldPassword"
                    type="password"
                    label="Old password"
                    validation={{
                        status: validation?.oldPassword,
                        message: COMMON_TEXTS.ERRORS.PASSWORD_NOT_VALID,
                    }}
                    value={passwords.oldPassword}
                    onChange={handlePassword}
                    autoFocus
                />
                <Input
                    id="newPassword"
                    type="password"
                    label="New password"
                    validation={{
                        status: validation?.newPassword,
                        message: COMMON_TEXTS.ERRORS.PASSWORD_NOT_VALID,
                    }}
                    value={passwords.newPassword}
                    onChange={handlePassword}
                />
            </Form>

            <ErrorMessage error={errorMessage} />
        </Page>
    )
}
