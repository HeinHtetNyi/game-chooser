import { FunctionComponent, useState } from "react";

interface ExpandableTextProps {
    children: string,
    minChar?: number,
}
 
const ExpandableText: FunctionComponent<ExpandableTextProps> = ({
    children,
    minChar=100,
}) => {

    const [isExpanded, setIsExpanded] = useState(false)

    const handleClick = () => {
        setIsExpanded(!isExpanded)
    }

    return (  
        <div>
            {
                isExpanded ? 
                <>
                    {children.slice(0, minChar)}
                    ...<button onClick={handleClick}>more</button>
                </> :
                <>
                    {children}
                    <button onClick={handleClick}>less</button>
                </>
            }
        </div>
    );
}
 
export default ExpandableText;