import React, { useState } from 'react'
import SlidingPane from 'react-sliding-pane';



function SlidingPanes() {
    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
    });
    return (
        <div>
            <button onClick={() => setState({ isPaneOpen: true })}>
                Click me to open right pane!
            </button>
            <SlidingPane
                className="some-custom-class"
                overlayClassName="some-custom-overlay-class"
                isOpen={state.isPaneOpen}
                title="Hey, it is optional pane title.  I can be React component too."
                subtitle="Optional subtitle."
                onRequestClose={() => {
                    // triggered on "<" on left top click or on outside click
                    setState({ isPaneOpen: false });
                }}
            />

        </div>
    )
}

export default SlidingPanes