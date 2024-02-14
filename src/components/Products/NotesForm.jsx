import { Form, Input, Modal } from "antd";
export default function NotesForm({ open, onCreate, onCancel }) {
  const [form] = Form.useForm();
  return (
    <Modal
      open={open}
      title="Add Notes"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
      >
        <Form.Item name="head" label="Head">
          <Input />
        </Form.Item>
        <Form.Item name="heart" label="Heart">
          <Input />
        </Form.Item>
        <Form.Item name="base" label="Base">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}
