import { useSetRecoilState } from "recoil"
import { countAtom } from "../../store/atoms/count"

export default function ButtonComp() {
    console.log('button re-render')
    const setCount = useSetRecoilState(countAtom);
    return (
        <>
            <button onClick={() => setCount(c => c + 1)}>Increment+</button>
            <button onClick={() => setCount(c => c - 1)}>Decrement+</button>
        </>
    )
}