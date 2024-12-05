import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/organisms/Header';
import Button from '../components/atoms/Button';
import ListContainer from '../components/organisms/ListContainer';
import useLocalStorageState from 'use-local-storage-state';
import { dataset } from '../data/dataset';

const Home: NextPage = () => {
  const [items, setItems] = useLocalStorageState('items', {
    defaultValue: dataset,
  });

  const handleAddList = (title: string) => {
    setItems((prevItems: any) => [
      ...prevItems,
      {
        id: prevItems.length + 1,
        title: title,
        cards: [],
      },
    ]);
  };

  const handleRemoveList = (id: number) => {
    setItems((prevItems: any) =>
      prevItems.filter((items: { id: number }) => items.id !== id)
    );
  };

  const handleAddCard = (idList: number, title: string) => {
    setItems(
      items.map((list: any) =>
        list.id === idList
          ? {
              ...list,
              cards: [
                ...list.cards,
                {
                  id: list.cards.length + 1,
                  title: title,
                  description: '',
                  follow: false,
                },
              ],
            }
          : { ...list }
      )
    );
  };

  const handleFollowCard = (
    idList: number,
    idCard: number,
    follow: boolean
  ) => {
    setItems(
      items.map((list: any) =>
        list.id === idList
          ? {
              ...list,
              cards: list.cards.map((card: any) =>
                card.id === idCard ? { ...card, follow } : { ...card }
              ),
            }
          : { ...list }
      )
    );
  };

  const handleDescriptionCard = (
    idList: number,
    idCard: number,
    description: string
  ) => {
    setItems(
      items.map((list: any) =>
        list.id === idList
          ? {
              ...list,
              cards: list.cards.map((card: any) =>
                card.id === idCard ? { ...card, description } : { ...card }
              ),
            }
          : { ...list }
      )
    );
  };

  const handleRemoveCard = (idList: number, idCard: number) => {
    setItems(
      items.map((list: any) =>
        list.id === idList
          ? {
              ...list,
              cards: list.cards.filter((card: any) => card.id !== idCard),
            }
          : { ...list }
      )
    );
  };

  const resetData = () => {
    setItems([...dataset]);
  };

  return (
    <div className="min-h-screen bg-[#838c91]">
      <Head>
        <title>Next Trello</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* NAV HEADER */}
      <Header />

      <main className="p-[8px]">
        {/* MAIN HEADER */}
        <div className="flex gap-5">
          <h1 className="ml-[12px] mt-[2px] h-[32px] text-lg font-bold text-white">
            Tableau principal
          </h1>
          <Button
            id="initDataset"
            type="primary"
            action="button"
            click={() => resetData()}
          >
            Initialiser le jeu de données
          </Button>
        </div>
        {/* LIST CONTAINER */}
        <ListContainer
          items={items}
          addList={handleAddList}
          removeList={handleRemoveList}
          addCard={handleAddCard}
          followCard={handleFollowCard}
          removeCard={handleRemoveCard}
          descriptionCard={handleDescriptionCard}
        />
      </main>
    </div>
  );
};

export default Home;
