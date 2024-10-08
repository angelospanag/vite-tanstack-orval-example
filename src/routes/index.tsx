import { createFileRoute } from "@tanstack/react-router";
import { getFindPetsByStatusQueryOptions } from "../client";
import { Pet } from "../model";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/")({
  component: Index,
  loader: ({ context: { queryClient } }) => {
    return queryClient.ensureQueryData(
      getFindPetsByStatusQueryOptions({ status: "pending" })
    );
  },
});

function Index() {
  const { data } = useSuspenseQuery(
    getFindPetsByStatusQueryOptions({ status: "pending" })
  );

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <ul>
        {data?.data.map((pet: Pet) => (
          <li key={pet.id}>
            {pet.id} - {pet.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
