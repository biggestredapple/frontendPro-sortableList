import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { Container, ListContainer, Title } from "./index.styles";
import { 
  DisabledInput,
  Input,
  SelectedSkill,
  Suggested,
} from "./components";

const defaultSkillList = [
  "HTML",
  "CSS",
  "Bootstrap",
  "Javascript",
  "Typescript",
  "React",
  "Redux",
  "Angular",
  "Vue",
  "NodeJS",
  "NextJS",
];

export const SortableList: React.FC = () => {
  const [total, setTotal] = useState<string[]>(defaultSkillList);
  const [skills, setSkills] = useState<string[]>([]);
  const leftItems = 4 - skills.length;

  const handleDeleteSkill = (value: string) => {
    const newSkills = skills.filter((skill) => skill !== value);
    setSkills(newSkills);
    setTotal((prev) => [...prev, value]);
  };

  const handleAddSkill = (value: string) => {
    if (skills.length === 5) return;
    setSkills((prev) => [...prev, value]);
    const newTotal = total.filter((skill) => skill !== value);
    setTotal(newTotal);
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return; // Check if not dropped in a valid destination
    setSkills((prevSkills) => {
      const updatedSkills = [...prevSkills];
      const [movedSkill] = updatedSkills.splice(result.source.index, 1);
      if (result.destination) {
        updatedSkills.splice(result.destination.index, 0, movedSkill);
      }
      return updatedSkills;
    });
  };

  return (
    <div>
      <Title>Select your top 5 tech skills</Title>
      <Container>
        <ListContainer>
          {!!skills.length && (
            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId="droppable">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {skills.map((skill, key) => (
                      <Draggable
                        key={key}
                        index={key}
                        draggableId={key.toString()}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                          >
                            <SelectedSkill
                              value={skill}
                              order={key+1}
                              handleDeleteSkill={handleDeleteSkill}
                            ></SelectedSkill>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>                  
                )}
              </Droppable>
            </DragDropContext>
          )}
          {skills.length < 5 && (
            <Input defaultSkillList={total} order={skills.length + 1} handleAddSkill={handleAddSkill} />
          )}

          {leftItems > 0 &&
            [...Array(leftItems)].map((_, key) => <DisabledInput key={key} order={6 - leftItems + key} />)}
        </ListContainer>
        <Suggested skills={total} handleAdd={handleAddSkill} />
      </Container>
    </div>
  );
}