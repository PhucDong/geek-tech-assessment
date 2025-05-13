import React from "react";
import Pagination from "../common/Pagination";
import type { User } from "../../types/Users";
import ShowButton from "../common/ShowButton";

interface UserListTableProps {
  data: User[];
  totalUsers: number | undefined;
  limit: number | undefined;
  page: number | undefined;
  onPage: ((page: number) => void) | undefined;
}

function UserListTable(props: UserListTableProps): React.ReactElement {
  const { data, onPage, totalUsers, limit, page } = props;

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left bg-white shadow-lg rounded-lg">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b desktop:text-sm laptopl:text-base font-semibold text-gray-600">
                ID
              </th>
              <th className="px-5 py-3 border-b desktop:text-sm laptopl:text-base font-semibold text-gray-600">
                Avatar
              </th>
              <th className="px-5 py-3 border-b desktop:text-sm laptopl:text-base font-semibold text-gray-600">
                Name
              </th>
              <th className="px-5 py-3 border-b desktop:text-sm laptopl:text-base font-semibold text-gray-600">
                Email
              </th>
              <th className="px-5 py-3 border-b desktop:text-sm laptopl:text-base font-semibold text-gray-600">
                Phone
              </th>
              <th className="px-5 py-3 border-b desktop:text-sm laptopl:text-base font-semibold text-gray-600">
                Website
              </th>
              <th className="px-5 py-3 border-b desktop:text-sm laptopl:text-base font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b h-[64px]">
                <td className="px-5 py-4 desktop:text-sm">{item.id}</td>
                <td className="px-6 py-4 desktop:text-sm">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="desktop:w-[32px] desktop:h-[32px] laptopl:w-[34px] laptopl:h-[34px]"
                  />
                </td>
                <td className="px-6 py-4 desktop:text-sm">{item.name}</td>
                <td className="px-6 py-4 desktop:text-sm">
                  <a href={`mailto:${item.email}`}>{item.email}</a>
                </td>
                <td className="px-6 py-4 desktop:text-sm">
                  <a href={`tel:${item.phone}`}>{item.phone}</a>
                </td>
                <td className="px-6 py-4 desktop:text-sm">
                  <a
                    href={`https://${item.website}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.website}
                  </a>
                </td>
                <td className="px-5 py-4 space-x-2">
                  <ShowButton navigatePath={`/users/${item.id}`} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="w-full flex justify-center mt-6">
        <div className="flex items-center gap-2">
          {totalUsers &&
            limit &&
            totalUsers > limit &&
            onPage &&
            Array.from({ length: Math.round(totalUsers / limit) }, (_, i) => (
              <Pagination
                key={i}
                label={i + 1}
                isSelected={page === i + 1}
                onPage={onPage}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default UserListTable;
