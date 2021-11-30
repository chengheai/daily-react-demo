import React from 'react';
import { connect } from 'dva';
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Radio,
  Spin,
} from 'antd';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
@connect(({ form }) => ({
  mockForm: form,
}))
class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    type: 'created', // 模式
    form: {
      email: '',
      password: '',
      confirm: '',
      nickname: '',
      phone: '',
      website: '',
      captcha: '',
      agreement: false,
    },
    isLoading: false,
  };
  componentDidMount() {
    // this.getData();
  }
  getData() {
    console.log('this.props: ', this.props);
    this.props.dispatch({
      type: 'form/getData',
      payload: {},
      callback: form => {
        setTimeout(() => {
          this.setState({
            form: form,
            isLoading: false,
          });
        }, 2000);
      },
    });
  }
  handleChangeType = e => {
    this.setState({
      type: e.target.value,
    });
    if (e.target.value === 'review') {
      this.setState({
        isLoading: true,
      });
      this.getData();
    } else {
      this.handleReset();
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  };
  handleReset = () => {
    this.props.form.resetFields();
    let form = {
      email: '',
      password: '',
      confirm: '',
      nickname: '',
      phone: '',
      website: '',
      captcha: '',
      agreement: false,
    };
    this.setState({
      form,
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult, form, type, isLoading } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>,
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <div className="common-wrap" style={{ width: 600 }}>
        <Spin spinning={isLoading}>
          <Form.Item {...tailFormItemLayout}>
            <Radio.Group
              defaultValue="created"
              value={type}
              onChange={this.handleChangeType}
              buttonStyle="solid"
            >
              <Radio.Button value="created">创建模式</Radio.Button>
              <Radio.Button value="review">回显模式</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="E-mail">
              {getFieldDecorator('email', {
                initialValue: form.email,
                rules: [
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Password" hasFeedback>
              {getFieldDecorator('password', {
                initialValue: form.password,
                rules: [
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                  {
                    validator: this.validateToNextPassword,
                  },
                ],
              })(<Input.Password />)}
            </Form.Item>
            <Form.Item label="Confirm Password" hasFeedback>
              {getFieldDecorator('confirm', {
                initialValue: form.confirm,
                rules: [
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  {
                    validator: this.compareToFirstPassword,
                  },
                ],
              })(<Input.Password onBlur={this.handleConfirmBlur} />)}
            </Form.Item>
            <Form.Item
              label={
                <span>
                  Nickname&nbsp;
                  <Tooltip title="What do you want others to call you?">
                    <Icon type="question-circle-o" />
                  </Tooltip>
                </span>
              }
            >
              {getFieldDecorator('nickname', {
                initialValue: form.nickname,
                rules: [
                  { required: true, message: 'Please input your nickname!', whitespace: true },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Phone Number">
              {getFieldDecorator('phone', {
                initialValue: form.phone,
                rules: [{ required: true, message: 'Please input your phone number!' }],
              })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
            </Form.Item>
            <Form.Item label="Website">
              {getFieldDecorator('website', {
                initialValue: form.website,
                rules: [{ required: true, message: 'Please input website!' }],
              })(
                <AutoComplete
                  dataSource={websiteOptions}
                  onChange={this.handleWebsiteChange}
                  placeholder="website"
                >
                  <Input />
                </AutoComplete>,
              )}
            </Form.Item>
            <Form.Item label="Captcha" extra="We must make sure that your are a human.">
              <Row gutter={8}>
                <Col span={12}>
                  {getFieldDecorator('captcha', {
                    initialValue: form.captcha,
                    rules: [{ required: true, message: 'Please input the captcha you got!' }],
                  })(<Input />)}
                </Col>
                <Col span={12}>
                  <Button>Get captcha</Button>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              {getFieldDecorator('agreement', {
                initialValue: form.agreement,
                valuePropName: 'checked',
              })(
                <Checkbox>
                  I have read the <Button type="link">agreement</Button>
                </Checkbox>,
              )}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                submit
              </Button>
              <Button style={{ marginLeft: 10 }} onClick={this.handleReset}>
                reset
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create({})(RegistrationForm);
export default WrappedRegistrationForm;
