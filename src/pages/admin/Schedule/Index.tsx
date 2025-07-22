import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/useDispatch";
import {
  getSchedule,
  createSchedule,
  editSchedule,
  removeSchedule,
} from "../../../redux/slice/schedule/ScheduleSlice";
import { getTrain } from "../../../redux/slice/train/TrainSlice";
import { getStasiun } from "../../../redux/slice/stasiun/StasiunSlice";
import type { Schedule } from "../../../types/ScheduleTypes";
import { ScheduleFormModal } from "./FormModal";
import DataTable from "react-data-table-component";
import { Button } from "react-bootstrap";
import { MasterLayout } from "../MasterLayout";

export const IndexSchedule = () => {
  const dispatch = useAppDispatch();
  const { data: schedules } = useAppSelector((state) => state.schedule);
  const { data: trains } = useAppSelector((state) => state.train);
  const { data: stasiuns } = useAppSelector((state) => state.stasiun);

  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState<Schedule | null>(null);

  useEffect(() => {
    dispatch(getSchedule());
    dispatch(getTrain());
    dispatch(getStasiun());
  }, [dispatch]);

  const handleSave = (data: Omit<Schedule, "id">, id?: number) => {
    if (id) dispatch(editSchedule({ id, data }));
    else dispatch(createSchedule(data));
    setShow(false);
  };

  const handleDelete = (id: number) => {
    if (confirm("Yakin hapus jadwal?")) dispatch(removeSchedule(id));
  };

  const getScheduleColumns = ({
    onDelete,
  }: {
    onEdit: (row: Schedule) => void;
    onDelete: (id: number) => void;
  }) => [
    {
      name: "Nama Kereta",
      selector: (row: Schedule) => row.trainName,
      sortable: true,
    },
    {
      name: "Stasiun Keberangkatan",
      selector: (row: Schedule) => row.departureStation,
      sortable: true,
    },
    {
      name: "Stasiun Tujuan",
      selector: (row: Schedule) => row.arrivalStation,
      sortable: true,
    },
    {
      name: "Jam Keberangkatan",
      selector: (row: Schedule) =>
        new Date(row.departureTime).toLocaleString(),
    },
    {
      name: "Jam Tiba",
      selector: (row: Schedule) =>
        new Date(row.arrivalTime).toLocaleString(),
    },
    {
      name: "Aksi",
      cell: (row: Schedule) => (
        <>
          <Button size="sm" variant="warning" className="me-2" onClick={() => {
            setSelected(row);
            setShow(true);
          }}>
            Edit
          </Button>
          <Button size="sm" variant="danger" onClick={() => onDelete(row.id)}>
            Hapus
          </Button>
        </>
      ),
    },
  ];

  return (
    <MasterLayout>
      <div className="container py-4">
        <h2>Jadwal Kereta</h2>
        <Button
          className="mb-3"
          onClick={() => {
            setSelected(null);
            setShow(true);
          }}
        >
          Tambah Jadwal
        </Button>

        <DataTable
          columns={getScheduleColumns({
            onEdit: (row) => setSelected(row),
            onDelete: handleDelete,
          })}
          data={schedules}
          pagination
        />

        <ScheduleFormModal
          show={show}
          onHide={() => setShow(false)}
          onSave={handleSave}
          selected={selected}
          trains={trains}
          stasiuns={stasiuns}
        />
      </div>
    </MasterLayout>
  );
};
