import s from "./NotFound.module.css"
import Button from "@mui/material/Button"
import { Path } from "@/common/routing"
import { Link } from "react-router"

export const NotFound = () => {
  return (
    <>
      <h1 className={s.title}>404</h1>
      <h2 className={s.subtitle}>page not found</h2>
      <Button
        component={Link}
        to={Path.Main}
        variant={"contained"}
        style={{ width: "200px", padding: "15px", margin: "0 auto" }}
      >
        Main page
      </Button>
    </>
  )
}
