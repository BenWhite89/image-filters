import React from 'react';
import Form from 'react-bootstrap/Form';
import { Effects } from '../scripts/Effects';
// import '../styles/components/EffectSelector.css';

const EffectSelector: React.FC<EffectSelectorProps> = (Props: EffectSelectorProps) => {
  const [effects] = React.useState<Effect[]>(Effects);
  const [effect, setEffect] = React.useState<string>("");
  const defaultValue: Effect = effects[0];
  const options = effects.map((effect, index) => (<option key={index}>{ effect.name }</option>))
  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>): void => {
    Props.selectEffect(e.target.value);
    setEffect(e.target.value);
  };

  return (
    <Form>
      <Form.Control
        as="select"
        value={effect || defaultValue.name}
        onChange={handleSelect}
      >
        { options }
      </Form.Control>
    </Form>
  )
}

export default EffectSelector