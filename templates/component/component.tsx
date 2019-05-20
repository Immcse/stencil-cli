import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'COMPONENT_TAG',
  styleUrl: 'COMPONENT_TAG.css'
})
export class COMPONENT_NAME {
  
  /* Sample */
  @Prop() text: string;
  
  render() {
    return (
      <div>

      </div>
    );
  }
}
