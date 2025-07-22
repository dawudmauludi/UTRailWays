// pages/admin/train/IndexTrain.tsx
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/useDispatch";
import DataTable from "react-data-table-component";
import { columns } from "./columns";
import { FormModal } from "./FormModal";
import {
  getTrain,
  createTrain,
  editTrain,
  removeTrain,
} from "../../../redux/slice/train/TrainSlice";
import type { Train } from "../../../types/TrainTypes";
import { MasterLayout } from "../MasterLayout";

export const IndexTrain = () => {
  const dispatch = useAppDispatch();
  const { data: trainList, loading } = useAppSelector((state) => state.train);

  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState<Train | null>(null);

  useEffect(() => {
    dispatch(getTrain());
  }, [dispatch]);

  const handleSave = (formData: Omit<Train, "id">, id?: number) => {
    if (id) {
      dispatch(editTrain({ id, data: formData }));
    } else {
      dispatch(createTrain(formData));
    }
    setShow(false);
  };

  return (
    <MasterLayout>
    <div className="container py-4">
      <h2>Data Kereta</h2>
      <button className="btn btn-primary mb-3" onClick={() => { setSelected(null); setShow(true); }}>
        Tambah Kereta
      </button>

      <DataTable
        columns={columns(
          (item) => { setSelected(item); setShow(true); },
          (id) => dispatch(removeTrain(id))
        )}
        data={trainList}
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
