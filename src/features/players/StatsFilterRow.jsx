import styled from "styled-components";
import Filter from "../../ui/Filter";
import { GiBattleAxe } from "react-icons/gi";

const StyledFilterRow = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0 1rem 0;
`;

function StatsFilterRow() {
    const options = [{ text: "Season 0", value: "0" }];
    const field = "season";

    return (
        <StyledFilterRow>
            <Filter
                options={options}
                field={field}
                name="stats"
                icon={<GiBattleAxe />}
            />
        </StyledFilterRow>
    );
}

export default StatsFilterRow;
