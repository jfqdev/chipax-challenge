const {getResourcesFirstPageData,getResourcesAllData } = require('../../services/rickAndMortyApi')
const {expect} = require('chai')

describe('Rick and Morty Api Service', ()=>{
  const resources = ['character','episode','location']
  let resourcesFirstPageData
  let allData={}
  describe('getResourcesFirstPageData - Get /Character/Episode/Location first page data from Api',()=>{
    it('Results length should match resources length (3)', async()=>{
      resourcesFirstPageData = await getResourcesFirstPageData(resources)      
      expect(resourcesFirstPageData.length).to.be.equal(resources.length)
    })
    it('Valides first page status for every resource', ()=>{
      let status = 200
      resourcesFirstPageData.map(page=>{
        if(page.status !== 200){
          status = page.status
        }
      })
      expect(status).to.be.equal(200,`Res status must be 200`)
    })
    it('Validates data existance of first page for every resource', ()=>{
      resourcesFirstPageData.map(page=>{
        expect(page.data).to.not.be.empty
      })
    })
  })
  describe('getResourcesAllData - Get /Character/Episode/Location all pages data from Api',()=>{    
    it('Valides all pages status and data existance for character resource', async()=>{
      let resourcesAllData = getResourcesAllData(resourcesFirstPageData,resources)
      allData.character = await resourcesAllData.character
      allData.episode = await resourcesAllData.episode
      allData.location = await resourcesAllData.location
      allData.character.map(page=>{
        expect(page.status).to.be.equal(200)
        expect(page.data).to.not.be.empty
      })
    })
    it('Valides all pages status and data existance for episode resource', ()=>{
      allData.episode.map(page=>{
        expect(page.status).to.be.equal(200)
        expect(page.data).to.not.be.empty
      })
    })
    it('Valides all pages status and data existance for location resource', ()=>{
      allData.location.map(page=>{
        expect(page.status).to.be.equal(200)
        expect(page.data).to.not.be.empty
      })
    })
    
  })
})