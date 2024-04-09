'use client'
import { Button, Checkbox, Form, Input, type FormProps } from 'antd';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './index.css';
import "./globals.css";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};


export default function Home() {
  const router = useRouter();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
      if (values.username === "admin" && values.password === "123") {
        router.push('/animation');
      } else {
          alert('Incorrect username or password!');
      }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <main>
      <div style= {{background: "white"}}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      </div>
    </main>
  );
}