// pages/admin/schedule/ScheduleFormModal.tsx
import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import type { Schedule } from "../../../types/ScheduleTypes";
import type { Train } from "../../../types/TrainTypes";
import type { Stasiun } from "../../../types/StasiunTypes";

type Props = {
  show: boolean;
  onHide: () => void;
  onSave: (data: Omit<Schedule, "id">, id?: number) => void;
  selected: Schedule | null;
  trains: Train[];
  stasiuns: Stasiun[];
};

export const ScheduleFormModal: React.FC<Props> = ({ show, onHide, onSave, selected, trains, stasiuns }) => {
  const [form, setForm] = useState<Omit<Schedule, "id">>({
    trainId: 0,
    departureStationId: 0,
    arrivalStationId: 0,
    departureTime: "",
    arrivalTime: "",
  });

  useEffect(() => {
    if (selected) {
      setForm({
        trainId: selected.trainId,
        departureStationId: selected.departureStationId,
        arrivalStationId: selected.arrivalStationId,
        departureTime: selected.departureTime,
        arrivalTime: selected.arrivalTime,
      });
    } else {
      setForm({
        trainId: trains[0]?.id || 0,
        departureStationId: stasiuns[0]?.id || 0,
        arrivalStationId: stasiuns[0]?.id || 0,
        departureTime: "",
        arrivalTime: "",
      });
    }
  }, [selected, trains, stasiuns]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name.includes("Id") ? parseInt(value) : value,
    }));
  };

  const handleSubmit = () => {
    onSave(form, selected?.id);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{selected ? "Edit" : "Tambah"} Jadwal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-2">
            <Form.Label>Kereta</Form.Label>
            <Form.Select name="trainId" value={form.trainId} onChange={handleChange}>
              {trains.map((t) => (
                <option key={t.id} value={t.id}>{t.namaKereta}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Stasiun Keberangkatan</Form.Label>
            <Form.Select name="departureStationId" value={form.departureStationId} onChange={handleChange}>
              {stasiuns.map((s) => (
                <option key={s.id} value={s.id}>{s.namaStasiun}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Stasiun Tujuan</Form.Label>
            <Form.Select name="arrivalStationId" value={form.arrivalStationId} onChange={handleChange}>
              {stasiuns.map((s) => (
                <option key={s.id} value={s.id}>{s.namaStasiun}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Waktu Berangkat</Form.Label>
            <Form.Control type="datetime-local" name="departureTime" value={form.departureTime} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)} />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Waktu Tiba</Form.Label>
            <Form.Control type="datetime-local" name="arrivalTime" value={form.arrivalTime} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Batal</Button>
        <Button variant="primary" onClick={handleSubmit}>Simpan</Button>
      </Modal.Footer>
    </Modal>
  );
};
