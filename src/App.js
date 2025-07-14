// App.jsx
import React, { useState } from 'react';
import DialogWindow from './components/DialogWindow';

const App = () => {
  const [visible, setVisible] = useState(false);
  const [variant, setVariant] = useState(1);

  const baseHeader = {
    icon: "🔔",
    title: "Modal Window",
    buttons: [{ label: "X", onClick: () => setVisible(false) }],
  };

  const variants = {
    1: {
       header: {
        icon: "⚙️",
        title: "Settings Dialog",
        buttons: [
          { label: "Help", onClick: () => alert("Help clicked") },
          { label: "Close", onClick: () => setVisible(false) }
        ]
      },
      content: <p>This is a Setting Dialog box with header and footer and icon and title</p>,
      footer: {
        description: "Footer description is here.",
        buttons: [
          { label: "Cancel", onClick: () => setVisible(false) },
          { label: "OK", onClick: () => alert("Confirmed") },
        ],
      }
    },
    2: {
      content: <p>No footer buttons, just some text.</p>,
      footer: {}
    },
    3: {
      content: <p>Header with 2 buttons and custom content.</p>,
      footer: {
        buttons: [{ label: "Close", onClick: () => setVisible(false) }],
      },
      header: {
        icon: "⚙️",
        title: "Settings Dialog",
        buttons: [
          { label: "Help", onClick: () => alert("Help clicked") },
          { label: "Close", onClick: () => setVisible(false) }
        ]
      }
    }
  };

  const showDialog = (variantId) => {
    setVariant(variantId);
    setVisible(true);
  };

  return (
    <div >
      <h1>Dialog Window Assignment</h1>
      <button onClick={() => showDialog(1)}>Show Dialog Variant 1</button>
      <button onClick={() => showDialog(2)}>Show Dialog Variant 2</button>
      <button onClick={() => showDialog(3)}>Show Dialog Variant 3</button>

      {visible && (
        <DialogWindow
          headerProps={variants[variant].header || baseHeader}
          content={variants[variant].content}
          footerProps={variants[variant].footer}
        />
      )}
    </div>
  );
};

export default App;
