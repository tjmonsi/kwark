import { UpdatingElement } from 'lit-element';
import { render, TemplateResult } from 'lit-html';

export class KwarkElement extends UpdatingElement {
  /**
   * Updates the element. This method reflects property values to attributes
   * and calls `render` to render DOM via lit-html. Setting properties inside
   * this method will *not* trigger another update.
   *
   * @param {Map<String, Object>} changedProperties Map of changed properties with old values
   */
  update (changedProperties) {
    super.update(changedProperties);
    const templateResult = this.render() || null;
    if (templateResult && templateResult instanceof TemplateResult) {
      render(templateResult, this);
    }
  }

  /**
   * Invoked on each update to perform rendering tasks. This method must return
   * a lit-html TemplateResult. Setting properties inside this method will *not*
   * trigger the element to update.
   *
   * @returns {TemplateResult|void}
   */
  render () {}
}
