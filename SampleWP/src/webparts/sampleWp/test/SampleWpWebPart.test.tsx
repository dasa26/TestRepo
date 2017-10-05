//  "use strict";
import * as mocha from 'mocha';
import * as React from 'react';
import * as sinon from 'sinon';
import {assert, expect} from 'chai';
import {mount, render, shallow} from 'enzyme';
import SplistItems from '../components/SplistItems';
import chaiArrays from 'chai-arrays';
// import chaiThings = require('chai-things');
// import chaiAsPromised = require('chai-as-promised');
// chai.use(chaiThings);
// chai.use(chaiAsPromised);



declare const sinon;

describe('<SplistItems />',() =>{
  const descTxt = "Testing Stock Details WEb part";
  let componentDidMountSpy;
  let renderedElement;
  let afterElement;
  var myItem= [            
                {
                    "AssetName":"MasterCard",
                    "todaysPrice": 141.70,
                    "priceDifference":0.08,
                    "priceIncrease": false
                },

                {
                    "AssetName":"VISA",
                    "todaysPrice": 100.70,
                    "priceDifference":0.06,
                    "priceIncrease": true
                },

                {
                    "AssetName":"American Express",
                    "todaysPrice": 41.70,
                    "priceDifference":8,
                    "priceIncrease": false
                },
                {
                    "AssetName":"PayPal",
                    "todaysPrice": 41.70,
                    "priceDifference":8,
                    "priceIncrease": true
                }
            ];

  before(() => {
      componentDidMountSpy = sinon.spy(SplistItems.prototype, 'componentDidMount');
      renderedElement = mount(<SplistItems description={descTxt} />);
  });

  after (() => {
      componentDidMountSpy.restore();
  });

  ///TEst Cases are written here

  it('<SplistItems/> should render something div', () => {
      expect(renderedElement.find('div').find('')).to.be.exist;
  });

  it('<SplistItems/> should render something ul', () => {
      expect(renderedElement.find('ul').find('')).to.be.exist;
  });

  it('< SplistItems/> should call componentDidMount only once', () =>{
      expect(componentDidMountSpy.calledOnce).to.equal(true);
  });

  it('<SplistItems/> should render a div from JSON', () =>{
      //expect(renderedElement.find('results')).to.be.not.null;
      expect(renderedElement.state('items')).to.be.an('array');
      //expect(renderedElement.state('items').values).to.include.members(['MasterCard',141.70,0.08,false]);
     // expect([1, 2, 3]).to.have.members([2, 1, 3]);
  });

  it('<SplistItems/> count of UL LI', () =>{
      expect(renderedElement.find('li').length).to.be.not.null;
  });

  it('<SplistItems/> Check that the JSON returned is an Object', () =>{
     expect(renderedElement).to.be.an('object');
  });

  it('<SplistItems/> Check the fetched array is equal to the mock array for testing',(done) =>{
     setTimeout( () => {
         try{
            expect(renderedElement.state('items')).deep.equal(myItem);
            //expect(renderedElement.state('items')).should.include.something.that.deep.equals()
        // var elm = shallow(<SplistItems description={descTxt}/>).state('items').find('div').length;
        //     return expect(elm).to.eventually.be.an('array')
        //     .that.contains.something.with.property('AssetName','todaysPrice');
        //expect(renderedElement.state('items')).should.be.an('array').that.contains.something.with
            done();
         }
        catch(e){
            done(e);
        }
        
        
    }, 1000 );      
     
  });

  it('<SplistItems/> Check the fetched array members is equal to the mock array members for testing',(done) =>{
     setTimeout( () => {
         try{
            expect(renderedElement.state('items')).deep.members(myItem);
            //expect(renderedElement.state('items')).should.include.something.that.deep.equals()
        // var elm = shallow(<SplistItems description={descTxt}/>).state('items').find('div').length;
        //     return expect(elm).to.eventually.be.an('array')
        //     .that.contains.something.with.property('AssetName','todaysPrice');
        //expect(renderedElement.state('items')).should.be.an('array').that.contains.something.with
            done();
         }
        catch(e){
            done(e);
        }
        
        
    }, 1000 );      
     
  });

});
