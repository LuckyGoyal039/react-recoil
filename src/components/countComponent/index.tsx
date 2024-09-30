import ButtonComp from "../Button";
import IsEven from "../IsEven";
import ShowCount from "../showCount";

export default function CountComponent() {
    console.log("count comp is rerender")
    return (
        <>
            <ShowCount />
            <ButtonComp />
            <IsEven />
        </>
    )
}