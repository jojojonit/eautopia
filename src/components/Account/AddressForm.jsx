import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Form, Input, Modal, Radio, Switch } from "antd";

export default function AddressForm({ open, onCreate, onCancel }) {
  const [form] = Form.useForm();

  return (
    <Modal
      open={open}
      title="Add a New Address"
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
        name="form_in_modal"
        layout="vertical"
        initialValues={{
          modifier: "public",
        }}
      >
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[
            {
              required: true,
              message: "Please provide your name!",
            },
          ]}
          style={{
            display: "inline-block",
            width: "calc(50% - 10px)",
            marginRight: "20px",
          }}
        >
          <Input placeholder="First Name" />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last Name"
          style={{
            display: "inline-block",
            width: "calc(50% - 10px)",
          }}
        >
          <Input placeholder="Last Name" />
        </Form.Item>
        <Form.Item
          name="streetAddress"
          label="Street Address"
          rules={[
            {
              required: true,
              message: "Please provide your address!",
            },
          ]}
        >
          <Input placeholder="Street Address" />
        </Form.Item>
        <Form.Item name="apartment" label="Apartment">
          <Input placeholder="Apartment, Unit" />
        </Form.Item>
        <Form.Item
          name="country"
          label="Country"
          rules={[
            {
              required: true,
              message: "Please provide your country!",
            },
          ]}
        >
          <Input placeholder="Country" />
        </Form.Item>
        <Form.Item name="city" label="City">
          <Input placeholder="City" />
        </Form.Item>
        <Form.Item
          name="postal"
          label="Postal"
          rules={[
            {
              required: true,
              message: "Please provide your name!",
            },
          ]}
        >
          <Input placeholder="Postal / Zip Code" />
        </Form.Item>

        <Form.Item
          name="default"
          label="Set as Default"
          className="collection-create-form_last-form-item"
        >
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            defaultChecked
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}
