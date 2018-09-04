document.addEventListener
    ("DOMContentLoaded",
    function () {

        if (document.querySelectorAll('.discount-price') && document.querySelectorAll('.discount-price')[0]) {
            document.querySelectorAll('.discount-price')[0].innerText = document.querySelectorAll('.discount-price')[0].innerText.replace(/Y.*:/g, ':')
        }
        window.addEventListener('load', () => {
            let oldSlider = document.querySelector('#cwsBsSlider').innerHTML;
            setTimeout(() => {
                document.querySelector('#cwsBsSlider').innerHTML = oldSlider;
            }, 1000)
        })


        window.addEventListener
            ("load",
            function () {
                document.querySelectorAll('.block-title').forEach(x => x.outerHTML = x.outerHTML.replace('strong', 'h2'))
                document.querySelectorAll('#demo').forEach(x => x.innerHTML = `<div id="owl-shopbybrand" class="owl-carousel owl-theme">
        <div class="item"><a href="#"><img src="http://139.59.82.228/nutriceleb/pub/media/wysiwyg/protocolv1logo.png" alt=""></a></div>
        <div class="item"><a href="#"><img src="http://139.59.82.228/nutriceleb/pub/media/wysiwyg/rishiv1logo.png" alt=""></a></div>
        <div class="item"><a href="#"><img src="http://139.59.82.228/nutriceleb/pub/media/wysiwyg/revivalabsv1logo.png" alt=""></a></div>
        <div class="item"><a href="#"><img src="http://139.59.82.228/nutriceleb/pub/media/wysiwyg/mrmv1logo.png" alt=""></a></div>
        <div class="item"><a href="#"><img src="http://139.59.82.228/nutriceleb/pub/media/wysiwyg/rishiv1logo.png" alt=""></a></div>
        <div class="item"><a href="#"><img src="http://139.59.82.228/nutriceleb/pub/media/wysiwyg/revivalabsv1logo.png" alt=""></a></div>
        <div class="item"><a href="#"><img src="http://139.59.82.228/nutriceleb/pub/media/wysiwyg/mrmv1logo.png" alt=""></a></div>
        <div class="item"><a href="#"><img src="http://139.59.82.228/nutriceleb/pub/media/wysiwyg/protocolv1logo.png" alt=""></a></div>
        <div class="item"><a href="#"><img src="http://139.59.82.228/nutriceleb/pub/media/wysiwyg/revivalabsv1logo.png" alt=""></a></div>
        </div>`)

                let interval = setInterval(function () {
                    Array.from(document.querySelector('meta[name=google-site-verification]').parentElement.childNodes).forEach(node => node.data && node.data.includes('google-site-verification') && node.remove() && clearInterval(interval))
                }, 200)
            }
            );
    }
    );

const replacement = `
  <div class="panel wrapper">
    <div class="top-wrapper">
      <div class="free-support">
        <div class="free-shipping-top"><span><span class="ship-text">Free Shipping Over $69</span></span></div>
        <div class="offers-top"><span class="offer-of-day"> <span>Daily Offers: 50% Off on ABC Vitamins - <span class="inner-span">Grab
                this deal</span></span> </span></div>
        <div class="support-top"><span><span class="ship-text">Support (909) 468 0808</span></span></div>
      </div>
    </div>
  </div>
  <div class="header content"><span data-action="toggle-nav" class="action nav-toggle"><span>Toggle Nav</span></span>
    <strong class="logo">
      <img src="https://www.nutricelebrity.com/newsite/pub/media/logo/stores/1/logo2_2_.png" alt="NutriCelebrity" width="303" height="94">
    </strong>

    <h1 style="
      display: inline;
  "></h1>
    <div data-block="minicart" class="minicart-wrapper 123">
      <span>test</span><a class="action showcart" href="https://www.nutricelebrity.com/newsite/checkout/cart/" data-bind="scope: 'minicart_content'">
        <!-- <span class="text">My Cart</span> -->
        <!-- <span class="counter qty"
                data-bind="blockLoader: isLoading">
                  <div class="totals" id="items">
                      <span>
                         <span data-bind="html: getCartParam('subtotal')"></span>
                      </span>

                  </div>
          </span> -->
      </a>



      <div class="ui-dialog ui-widget ui-widget-content ui-corner-all ui-front mage-dropdown-dialog" tabindex="-1" role="dialog"
        aria-describedby="ui-id-1" style="display: none;">
        <div class="block block-minicart empty ui-dialog-content ui-widget-content"
          data-role="dropdownDialog" id="ui-id-1" style="display: block;">
          <div id="minicart-content-wrapper" data-bind="scope: 'minicart_content'">
            <!-- ko template: getTemplate() -->
            <!-- /ko -->
          </div>
        </div>
      </div>
    </div>
    <div class="block block-search">
      <div class="block block-title"><strong>Search</strong></div>
      <div class="block block-content">
        <form class="form minisearch" id="search_mini_form" action="https://www.nutricelebrity.com/newsite/catalogsearch/result/"
          method="get">
          <div class="field search">
            <label class="label" for="search" data-role="minisearch-label">
              <span>Search</span>
            </label>
            <div class="control">
              <input id="search" type="text" name="q" value="" placeholder="Search by item name, UPC or SKU" class="input-text" maxlength="128"
                role="combobox" aria-haspopup="false" aria-autocomplete="both" autocomplete="off">
              <div id="search_autocomplete" class="search-autocomplete"></div>
              <div class="nested">
                <a class="action advanced" href="https://www.nutricelebrity.com/newsite/catalogsearch/advanced/" data-action="advanced-search">
                  Advanced Search </a>
              </div>
            </div>
          </div>
          <div class="actions">
            <button type="submit" title="Search" class="action search" disabled="">
              <span>Search</span>
            </button>
          </div>
        </form>
      </div>
    </div>
    <ul class="compare wrapper">
      <li class="item link compare" data-bind="scope: 'compareProducts'" data-role="compare-products-link">
        <a class="action compare no-display" title="Compare Products" data-bind="attr: {'href': compareProducts().listUrl}, css: {'no-display': !compareProducts().count}">
          Compare Products <span class="counter qty" data-bind="text: compareProducts().countCaption"></span>
        </a>
      </li>

    </ul>
  </div>`

setTimeout(() => {
    document.querySelector('header').innerHTML = replacement;
}, 5000)