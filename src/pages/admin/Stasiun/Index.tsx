import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/useDispatch";
import DataTable from "react-data-table-component";
import { columns } from "./columns";
import { FormModal } from "./FormModal";
import {
  getStasiun,
  createStasiun,
  editStasiun,
  removeStasiun,
} from "../../../redux/slice/stasiun/StasiunSlice";
import type { Stasiun } from "../../../types/StasiunTypes";
import { MasterLayout } from "../MasterLayout";

export const IndexStasiun = () => {
  const dispatch = useAppDispatch();
  const { data: stasiunList, loading } = useAppSelector((state) => state.stasiun);

  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState<Stasiun | null>(null);

  useEffect(() => {
    dispatch(getStasiun());
  }, [dispatch]);

  const handleSave = (formData: Omit<Stasiun, "id">, id?: number) => {
    if (id) {
      dispatch(editStasiun({ id, data: formData }));
    } else {
      dispatch(createStasiun(formData));
    }
    setShow(false);
  };

  return (
    <MasterLayout>
      <div className="container">
        <h2>Data Stasiun</h2>
        <button
          className="btn btn-primary mb-3"
          onClick={() => {
            setSelected(null); 
            setShow(true);
          }}
        >
          Tambah Stasiun
        </button>

        <DataTable
          columns={columns(
            (item) => {
              setSelected(item);
              setShow(true);
            },
            (id) => dispatch(removeStasiun(id))
          )}
          data={stasiunList}
          progressPending={loading}
          pagination
        />

        <FormModal
          show={show}
          onHide={() => setShow(false)}
          onSave={handleSave}
          selected={selected}
        />
      </div>
    </MasterLayout>
  );
};
