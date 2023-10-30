import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import MatchesRow from "./MatchesRow";
import { useMatches } from "./useMatches";

function MatchesTable() {
    const { matches, count, isLoadingMatches, errorMatches } = useMatches();

    if (isLoadingMatches) {
        return <Spinner />;
    }

    return (
        <Table columns="0.1fr 0.5fr 0.5fr 0.5fr 0.4fr 1fr 0.5fr">
            <Table.Header>
                <div>Id</div>
                <div style={{ textAlign: "right" }}>Team 1</div>
                <div style={{ textAlign: "center" }}>Score</div>
                <div>Team 2</div>
                <div style={{ textAlign: "center" }}>Game Mode</div>
                <div style={{ textAlign: "center" }}>Start Time</div>
                <div>Duration</div>
            </Table.Header>
            <Table.Body
                noDataLabel="No matches available"
                data={matches}
                render={(match) => <MatchesRow key={match.id} match={match} />}
            />
            <Table.Footer>
                <Pagination numEntries={count} />
            </Table.Footer>
        </Table>
    );
}

export default MatchesTable;
